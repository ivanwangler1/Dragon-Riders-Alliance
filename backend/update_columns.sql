USE RidersOfIcarus;
GO
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('Accounts') AND name = 'permission')
BEGIN
    ALTER TABLE Accounts ADD permission INT DEFAULT 0;
END
GO
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('Accounts') AND name = 'age')
BEGIN
    ALTER TABLE Accounts ADD age INT;
END
GO
