--@block
CREATE TABLE Listings(
    title VARCHAR(255),
    price INT
);

--@block
INSERT INTO Listings (title, price)
VALUES 
    ('Couch','100'),
    ('Lamp','15'),
    ('Stool','10');

--@block
SELECT title, price FROM Listings
LIMIT 4;