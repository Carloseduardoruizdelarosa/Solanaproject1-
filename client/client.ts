import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import type { TodoList } from "../target/types/todo_list";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.TodoList as anchor.Program<TodoList>;


const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.TodoList;

async function main() {

  const content = "Estudiar Solana";

  const [taskPDA] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("task"),
      provider.wallet.publicKey.toBuffer(),
      Buffer.from(content)
    ],
    program.programId
  );

  console.log("PDA de la tarea:", taskPDA.toString());

  console.log("Creando tarea...");

  await program.methods
    .createTask(content)
    .accounts({
      task: taskPDA,
      user: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId
    })
    .rpc();

  let account = await program.account.task.fetch(taskPDA);

  console.log("Contenido:", account.content);
  console.log("Completada:", account.completed);

  console.log("Marcando tarea como completada...");

  await program.methods
    .completeTask()
    .accounts({
      task: taskPDA,
      authority: provider.wallet.publicKey
    })
    .rpc();

  account = await program.account.task.fetch(taskPDA);

  console.log("Estado actualizado:", account.completed);

}

main();