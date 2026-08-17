#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Address, Symbol, Vec, IntoVal, String};

#[contract]
pub struct CallerContract;

#[contractimpl]
impl CallerContract {

    pub fn send_feedback_and_reward(
        env: Env,
        feedback_contract: Address,
        _token_contract: Address,
        _user: Address,
        message: String,
    ) -> u32 {   // 👈 IMPORTANT

        let result: u32 = env.invoke_contract(
            &feedback_contract,
            &Symbol::new(&env, "send_feedback"),
            Vec::from_array(&env, [message.into_val(&env)]),
        );

        result   // 👈 return karo
    }
}