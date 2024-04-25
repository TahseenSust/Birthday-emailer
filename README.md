# Birthday Emailer

Birthday Emailer is a Node.js application that sends birthday wishes to customers automatically.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/birthday-emailer.git

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Set up the database: Run PostgreSQL database from docker:

   ```base
   docker run -it -e "POSTGRES_HOST_AUTH_METHOD=trust" -p 5432:5432 postgres

   ```

4. Set up environment variables: Create a .env file in the root directory and add the following variables:
   ```bash
   PORT=3000
   DATABASE_URL=postgres://your_username:your_password@localhost:5432/postgres
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   EMAIL_ADDRESS=your_email@example.com
   EMAIL_PASSWORD=your_email_password
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2 . Register customers:You can register customers by sending a POST request to /customer/register with JSON data containing customer details.Example:

```bash
curl -X POST \
  http://localhost:3000/customer/register \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "tahseen",
    "email": "tahseen.swe@gmail.com",
    "birthday": "1990-04-25"
}'

```
