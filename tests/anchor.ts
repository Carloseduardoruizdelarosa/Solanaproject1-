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

        const task = anchor.web3.Keypair.generate();

          it("Crear tarea", async () => {

              await program.methods
                    .createTask("Aprender Solana")
                          .accounts({
                                  task: task.publicKey,
                                          user: provider.wallet.publicKey,
                                                  systemProgram: anchor.web3.SystemProgram.programId,
                                                        })
                                                              .signers([task])
                                                                    .rpc();

                                                                        const taskAccount = await program.account.task.fetch(task.publicKey);

                                                                            console.log("Tarea:", taskAccount.content);
                                                                                console.log("Completada:", taskAccount.completed);
                                                                                  });

                                                                                    it("Completar tarea", async () => {

                                                                                        await program.methods
                                                                                              .completeTask()
                                                                                                    .accounts({
                                                                                                            task: task.publicKey,
                                                                                                                    authority: provider.wallet.publicKey,
                                                                                                                          })
                                                                                                                                .rpc();

                                                                                                                                    const taskAccount = await program.account.task.fetch(task.publicKey);

                                                                                                                                        console.log("Estado actualizado:", taskAccount.completed);
                                                                                                                                          });

                                                                                                                                          });