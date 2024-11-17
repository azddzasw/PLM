CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

INSERT INTO products (name, description) VALUES
('Product 1', 'Description for product 1'),
('Product 2', 'Description for product 2');
