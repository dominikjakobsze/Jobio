# Use the official PHP image as a base image
FROM php:8.2.11

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Supervisor
RUN apt-get install -y supervisor

# Install the PDO extension for MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Install the GD extension for PHP
RUN apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-jpeg --with-freetype \
    && docker-php-ext-install -j$(nproc) gd