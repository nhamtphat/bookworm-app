<p align="center">
<a href="https://laravel.com" target="_blank">
<img src="https://i.imgur.com/Ls4Npc0.png" width="400"></a></p>

## About Bookworm

Bookworm is an individual exercise in Nash Tech's The Rookies program. The assignment required developing a website for a bookstore called Bookworm. The website is developed based on Laravel, PostgreSQL, ReactJS and Bootstrap. 

## Installation

If you have composer installed, run this in your terminal to install dependencies:

    composer install

Also install dependencies for React.js:

    npm install

Copy `.env.example` to `.env` . Config database in it:

    DB_CONNECTION=pgsql
    DB_HOST=localhost
    DB_PORT=5432
    DB_DATABASE=bookworm
    DB_USERNAME=postgres
    DB_PASSWORD=secret

Run migrations to create database tables and seed dummy data if you want:

    php artisan migrate --seed

Build the React components:

    npm run prod
    or 
    npm run dev

## License

Based on Laravel framework - the open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
