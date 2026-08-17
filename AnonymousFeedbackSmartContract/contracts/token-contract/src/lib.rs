#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Address, symbol_short};

#[contract]
pub struct FeedbackToken;

#[contractimpl]
impl FeedbackToken {

    // 🪙 Mint tokens
    pub fn mint(env: Env, to: Address, amount: i128) {
        let key = (symbol_short!("BAL"), to.clone());
        let mut balance: i128 = env.storage().instance().get(&key).unwrap_or(0);
        balance += amount;
        env.storage().instance().set(&key, &balance);
    }

    //  Transfer tokens
    pub fn transfer(env: Env, from: Address, to: Address, amount: i128) {
        let from_key = (symbol_short!("BAL"), from.clone());
        let to_key = (symbol_short!("BAL"), to.clone());

        let mut from_balance: i128 = env.storage().instance().get(&from_key).unwrap_or(0);
        let mut to_balance: i128 = env.storage().instance().get(&to_key).unwrap_or(0);

        if from_balance < amount {
            panic!("Not enough balance");
        }

        from_balance -= amount;
        to_balance += amount;

        env.storage().instance().set(&from_key, &from_balance);
        env.storage().instance().set(&to_key, &to_balance);
    }

    //  Check balance
    pub fn balance(env: Env, user: Address) -> i128 {
        let key = (symbol_short!("BAL"), user);
        env.storage().instance().get(&key).unwrap_or(0)
    }
}