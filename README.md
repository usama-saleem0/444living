
    # Copy env file and add your own database and mail credentials
    cp .env.example .env

    # Install dependency
    composer install

    # Generate app key
    php artisan key:generate
    
    # Migrate database
    php artisan migrate

    # Create encryption keys
    php artisan passport:install

    # Install dependency with NPM
    npm install

    # Develop
    npm run dev # or npm run watch

    # Build on production
    npm run production
    
    # Serving application
    php artisan serve

   ```

## Configuration

* Email verification is optional and it's disabled by default.
  To enable it, change the following parameter in the `.env` file
  
  `MUST_VERIFY_EMAIL=true`

* To use email verification and reset password functionality is required to set up the email service. 
  In order to successfully send emails, we need to provide `MAIL_DRIVER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` in the `.env` file.



live website link: http://444living.com/
