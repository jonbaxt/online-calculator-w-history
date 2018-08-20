DROP TABLE IF EXISTS calculatorData;

CREATE TABLE IF NOT EXISTS calculatorData(
    id SERIAL PRIMARY KEY,
    equation TEXT,
    dateCreated DATE
);

INSERT INTO calculatorData 
(equation, dateCreated)
VALUES
('2 + 2 = 4', NOW()),
('4 + 2 = 6', NOW()),
('1 + 2 = 3', NOW()),
('1 / 1 = 1', NOW()),
('7 * 2 = 14', NOW()),
('1 * 2 = 2', NOW()),
('1 - 2 = -1', NOW()),
('-1 * 2 = -2', NOW()),
('9 - 4 = 5', NOW());

SELECT * FROM  calculatorData;