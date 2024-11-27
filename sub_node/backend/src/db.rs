use sqlx::{postgres::PgPoolOptions, Pool, Postgres};

pub type DbPool = Pool<Postgres>;

pub async fn init_pool(database_url: &str) -> Result<DbPool, sqlx::Error> {
    PgPoolOptions::new()
        .max_connections(5)
        .connect(database_url)
        .await
}



