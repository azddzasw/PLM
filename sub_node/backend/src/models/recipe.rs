use serde::{Deserialize, Serialize};
use uuid::Uuid;
use bigdecimal::BigDecimal;

#[derive(Deserialize, Serialize)]
pub struct Recipe {
    pub id : Uuid, 
    pub name: String,
    pub version: Option<i32>,
    pub cost: Option<BigDecimal>,
}

