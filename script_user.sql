USE odevjunior;

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role_access VARCHAR(20) NOT NULL,
    created_date DATETIME NOT NULL,
    ip_address VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY `email_un` (email)
);

INSERT INTO users (id, name, email, password, role_access, created_date, ip_address) VALUES
    ('1', 'O Dev Admin', 'odevjunior@odevjunior.com.br', 'admin123', 'admin', '2021-06-12T18:56:58.629Z', '171.424.324.22'),
	  ('2', 'Teste', 'teste@teste.com.br', 'teste123', 'user', '2021-06-12T18:56:58.629Z', '171.424.324.22');