#![cfg(test)]

use super::*;
use soroban_sdk::{Env, String};

#[test]
fn test_send_feedback() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Anonymousfeedback);
    let client = AnonymousfeedbackClient::new(&env, &contract_id);

    let message = String::from_str(&env, "Test feedback");

    let result = client.send_feedback(&message);

    assert_eq!(result, 1);
}

#[test]
fn test_fetch_feedback() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Anonymousfeedback);
    let client = AnonymousfeedbackClient::new(&env, &contract_id);

    let message = String::from_str(&env, "Hello");

    client.send_feedback(&message);

    let feedback = client.fetch_feedback(&1);

    assert_eq!(feedback, message);
}

#[test]
fn test_multiple_feedbacks() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Anonymousfeedback);
    let client = AnonymousfeedbackClient::new(&env, &contract_id);

    let msg1 = String::from_str(&env, "First");
    let msg2 = String::from_str(&env, "Second");

    let id1 = client.send_feedback(&msg1);
    let id2 = client.send_feedback(&msg2);

    assert_eq!(id1, 1);
    assert_eq!(id2, 2);
}