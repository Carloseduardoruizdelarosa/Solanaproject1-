use anchor_lang::prelude::*;

declare_id!("9mfFhprZJDrPVabUjLjP64MyG5rwhrBgLSEALJa1m3xU");

#[program]
pub mod todo_list {
    use super::*;

        pub fn create_task(ctx: Context<CreateTask>, content: String) -> Result<()> {
                let task = &mut ctx.accounts.task;
                        task.content = content;
                                task.completed = false;
                                        task.authority = *ctx.accounts.user.key;
                                                Ok(())
                                                    }

                                                        pub fn complete_task(ctx: Context<UpdateTask>) -> Result<()> {
                                                                let task = &mut ctx.accounts.task;
                                                                        task.completed = true;
                                                                                Ok(())
                                                                                    }

                                                                                        pub fn delete_task(_ctx: Context<DeleteTask>) -> Result<()> {
                                                                                                Ok(())
                                                                                                    }
                                                                                                    }

                                                                                                    #[derive(Accounts)]
                                                                                                    pub struct CreateTask<'info> {
                                                                                                        #[account(
                                                                                                                init,
                                                                                                                        payer = user,
                                                                                                                                space = 8 + 32 + 4 + 200 + 1
                                                                                                                                    )]
                                                                                                                                        pub task: Account<'info, Task>,

                                                                                                                                            #[account(mut)]
                                                                                                                                                pub user: Signer<'info>,

                                                                                                                                                    pub system_program: Program<'info, System>,
                                                                                                                                                    }

                                                                                                                                                    #[derive(Accounts)]
                                                                                                                                                    pub struct UpdateTask<'info> {
                                                                                                                                                        #[account(mut, has_one = authority)]
                                                                                                                                                            pub task: Account<'info, Task>,

                                                                                                                                                                pub authority: Signer<'info>,
                                                                                                                                                                }

                                                                                                                                                                #[derive(Accounts)]
                                                                                                                                                                pub struct DeleteTask<'info> {
                                                                                                                                                                    #[account(mut, close = authority, has_one = authority)]
                                                                                                                                                                        pub task: Account<'info, Task>,

                                                                                                                                                                            #[account(mut)]
                                                                                                                                                                                pub authority: Signer<'info>,
                                                                                                                                                                                }

                                                                                                                                                                                #[account]
                                                                                                                                                                                pub struct Task {
                                                                                                                                                                                    pub authority: Pubkey,
                                                                                                                                                                                        pub content: String,
                                                                                                                                                                                            pub completed: bool,
                                                                                                                                                                                            }