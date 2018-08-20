DROP TABLE IF EXISTS calculatorData;

CREATE TABLE IF NOT EXISTS calculatorData(
    id SERIAL PRIMARY KEY,
    equation TEXT,
    dateCreated DATE
);