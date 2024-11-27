use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Deserialize, Serialize)]
pub struct Inspiration {
    pub id: Uuid,
    pub title: Option<String>,
    pub description: Option<String>,
}


