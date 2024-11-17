FROM rust:1.72

WORKDIR /app
COPY . .
RUN cargo build --release
CMD ["./target/release/backend"]

