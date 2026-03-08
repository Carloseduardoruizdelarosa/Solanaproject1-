import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { TodoList } from "../target/types/todo_list";
import type { TodoList } from "../target/types/todo_list";

describe("todo_list", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TodoList as anchor.Program<TodoList>;
  

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.TodoList as Program<TodoList>;

  const content = "Aprender Solana";

  let taskPDA;

  it("Crear tarea", async () => {

    const [pda] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("task"),
        provider.wallet.publicKey.toBuffer(),
        Buffer.from(content)
      ],
      program.programId
    );

    taskPDA = pda;

    await program.methods
      .createTask(content)
      .accounts({
        task: taskPDA,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId
      })
      .rpc();

    const account = await program.account.task.fetch(taskPDA);

    console.log("Contenido:", account.content);
    console.log("Estado:", account.completed);
  });

  it("Ver tarea", async () => {

    const account = await program.account.task.fetch(taskPDA);

    console.log("Contenido:", account.content);
    console.log("Completada:", account.completed);
    console.log("Autor:", account.authority.toString());

  });

  it("Completar tarea", async () => {

    await program.methods
      .completeTask()
      .accounts({
        task: taskPDA,
        authority: provider.wallet.publicKey
      })
      .rpc();

    const account = await program.account.task.fetch(taskPDA);

    console.log("Nuevo estado:", account.completed);

  });

});