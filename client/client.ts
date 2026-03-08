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

  const task = anchor.web3.Keypair.generate();

    console.log("Creando tarea...");

      await program.methods
          .createTask("Estudiar Solana")
              .accounts({
                    task: task.publicKey,
                          user: provider.wallet.publicKey,
                                systemProgram: anchor.web3.SystemProgram.programId,
                                    })
                                        .signers([task])
                                            .rpc();

                                              console.log("Tarea creada:", task.publicKey.toString());

                                                let account = await program.account.task.fetch(task.publicKey);
                                                  console.log("Contenido:", account.content);

                                                    console.log("Marcando tarea como completada...");

                                                      await program.methods
                                                          .completeTask()
                                                              .accounts({
                                                                    task: task.publicKey,
                                                                          authority: provider.wallet.publicKey,
                                                                              })
                                                                                  .rpc();

                                                                                    account = await program.account.task.fetch(task.publicKey);
                                                                                      console.log("Completada:", account.completed);

                                                                                      }

                                                                                      main();