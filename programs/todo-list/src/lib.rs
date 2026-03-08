use anchor_lang::prelude::*;

declare_id!("AviV5wzuwzrcZczZ4yd6NoapLspdipdC8BuSXDpkUfLm");

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

    // Nueva función para visualizar la tarea
    pub fn view_task(ctx: Context<ViewTask>) -> Result<()> {
        let task = &ctx.accounts.task;

        msg!("Contenido de la tarea: {}", task.content);
        msg!("Completada: {}", task.completed);
        msg!("Autor: {}", task.authority);

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(content: String)]
pub struct CreateTask<'info> {
    #[account(
        init,
        payer = user,
        seeds = [b"task", user.key().as_ref(), content.as_bytes()],
        bump,
        space = 8 + 32 + 4 + 200 + 1
    )]
    pub task: Account<'info, Task>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateTask<'info> {
    #[account(
        mut,
        seeds = [b"task", authority.key().as_ref(), task.content.as_bytes()],
        bump,
        has_one = authority
    )]
    pub task: Account<'info, Task>,

    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct DeleteTask<'info> {
    #[account(
        mut,
        close = authority,
        seeds = [b"task", authority.key().as_ref(), task.content.as_bytes()],
        bump,
        has_one = authority
    )]
    pub task: Account<'info, Task>,

    #[account(mut)]
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct ViewTask<'info> {
    pub task: Account<'info, Task>,
}

#[account]
pub struct Task {
    pub authority: Pubkey,
    pub content: String,
    pub completed: bool,
}