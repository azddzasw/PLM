CREATE TABLE inspirations (
    id UUID PRIMARY KEY,            
    title VARCHAR(255),               
    description TEXT                  
);


CREATE TABLE recipes (
    id UUID PRIMARY KEY,            
    name VARCHAR(255) NOT NULL,       
    version INTEGER,                  
    cost DECIMAL(15, 2)               
);


CREATE TABLE restricted_chemicals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE 
);

CREATE TABLE compliance_requests (
    id SERIAL PRIMARY KEY,        -- 唯一标识符，自动递增
    formula TEXT[]               -- 配方成分列表，数组类型
);


-- test data
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO restricted_chemicals (name) VALUES
('restricted_chemical'),
('toxic_substance'),
('banned_additive');


INSERT INTO recipes (id, name, version, cost)
VALUES 
    (gen_random_uuid(), 'Chocolate Cake', 1, 10.99),
    (gen_random_uuid(), 'Pasta', NULL, NULL);


INSERT INTO inspirations (id, title, description)
VALUES 
    (gen_random_uuid(), 'Great Idea', 'This is a description of the great idea.'),
    (gen_random_uuid(), NULL, 'No title, but there is a description.'),
    (gen_random_uuid(), 'Another Idea', NULL);


INSERT INTO compliance_requests (formula)
VALUES 
    (ARRAY['Water', 'Glycerin', 'Fragrance']),
    (ARRAY['Alcohol', 'Citric Acid']),
    (ARRAY['Sodium Chloride', 'Vitamin C']);
