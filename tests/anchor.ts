import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { ContadorSolana } from "../target/types/contador_solana";
import type { ContadorSolana } from "../target/types/contador_solana";

describe("contador_solana", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ContadorSolana as anchor.Program<ContadorSolana>;
  

  const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

      const program = anchor.workspace.ContadorSolana as Program<ContadorSolana>;

        const counter = anchor.web3.Keypair.generate();

          it("Inicializa el contador", async () => {

              await program.methods.initialize()
                    .accounts({
                            counter: counter.publicKey,
                                    user: provider.wallet.publicKey,
                                            systemProgram: anchor.web3.SystemProgram.programId,
                                                  })
                                                        .signers([counter])
                                                              .rpc();

                                                                  const account = await program.account.counter.fetch(counter.publicKey);

                                                                      console.log("Valor inicial:", account.count);
                                                                        });

                                                                          it("Incrementa el contador", async () => {

                                                                              await program.methods.increment()
                                                                                    .accounts({
                                                                                            counter: counter.publicKey
                                                                                                  })
                                                                                                        .rpc();

                                                                                                            const account = await program.account.counter.fetch(counter.publicKey);

                                                                                                                console.log("Nuevo valor:", account.count);
                                                                                                                  });

                                                                                                                  });