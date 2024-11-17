use actix_web::{post, HttpResponse, Responder};

#[post("/sync")]
pub async fn sync_data() -> impl Responder {
    HttpResponse::Ok().body("Data synced successfully")
}
