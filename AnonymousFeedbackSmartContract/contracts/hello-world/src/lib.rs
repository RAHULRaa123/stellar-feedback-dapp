#![no_std]

use soroban_sdk::{contract, contractimpl, Env, symbol_short, Map, String};

#[contract]
pub struct Anonymousfeedback;

#[contractimpl]
impl Anonymousfeedback {

    pub fn send_feedback(env: Env, message: String) -> u32 {
        let mut count: u32 = env.storage().instance().get(&symbol_short!("COUNT")).unwrap_or(0);
        count += 1;

        let mut feedbacks: Map<u32, String> = env.storage().instance().get(&symbol_short!("FEEDBACK")).unwrap_or(Map::new(&env));

        feedbacks.set(count, message);
        env.storage().instance().set(&symbol_short!("FEEDBACK"), &feedbacks);
        env.storage().instance().set(&symbol_short!("COUNT"), &count);

        count
    }

    pub fn fetch_feedback(env: Env, id: u32) -> String {
        let feedbacks: Map<u32, String> = env.storage().instance().get(&symbol_short!("FEEDBACK")).unwrap();

        feedbacks.get(id).unwrap()
    }
}

#[cfg(test)]
mod test;