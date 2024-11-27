use actix_web::web;

use crate::controllers::{inspiration, recipe, compliance};

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg
        .service(
            web::scope("/inspiration")
                .route("", web::get().to(inspiration::get_inspirations))
                .route("", web::post().to(inspiration::add_inspiration)),
        )
        .service(
            web::scope("/recipes")
                .route("", web::get().to(recipe::get_recipes))
                .route("", web::post().to(recipe::add_recipe)),
        )
        .service(
            web::scope("/compliance")
                .route("", web::post().to(compliance::validate_compliance)),
        );
}
