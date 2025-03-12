# TrueTalk App

TrueTalk is a web application designed to manage various sections of a website through an admin panel. It includes features such as a home page, about page, gallery, books section, blog, and contact page. The admin panel allows for easy updates to the gallery, books, blog, and advert page.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [License](#license)

## Features

- **Home Page**: The landing page of the application.
- **About Page**: Provides information about the application.
- **Gallery Page**: Displays a collection of images.
- **Books Page**: Lists books available on the platform.
- **Blog Page**: Contains blog posts.
- **Contact Page**: Allows users to contact the site administrators.
- **Admin Panel**: Secure area for administrators to manage the site content.
  - **Dashboard**: Overview of the admin activities.
  - **Gallery Management**: Add, update, and delete images.
  - **Books Management**: Add, update, and delete book entries.
  - **Blog Management**: Add, update, and delete blog posts.
  - **Advert Management**: Manage advertisements displayed on the site.

## Installation

To get a local copy up and running follow these simple steps:

1. **Clone the repo**

   ```sh
   git clone https://github.com/remioluwatomi/truetalk-frontend.git

   ```

2. **Navigate to the project directory**

   ```sh
   cd truetalk-frontend

   ```

3. **Install dependencies**

   ```
   npm install

   ```

4. **Environment Variables Configuration**

To run this project, you need to provide the following environment variables in a `.env` file at the root of your project.

### Required Variables

Create a `.env` file and add the following lines:

```env
VITE_SERVER_BASE_URL=

#if using supabase, ensure you set your supabase variables:
VITE_SUPABASE_PASSKEY=
VITE_SUPABASE_PROJECT_NAME=
VITE_SUPABASE_URL=
VITE_USE_SUPABASE=true
```

### Description of Variables

- **VITE_SERVER_BASE_URL**: The base URL of your backend server. You can clone (https://github.com/remioluwatomi/truetalk-backend.git).

#### For supabase config:

- **VITE_SUPABASE_PASSKEY**: The API passkey for Supabase authentication.
- **VITE_SUPABASE_PROJECT_NAME**: The name of your Supabase project.
- **VITE_SUPABASE_URL**: The URL of your Supabase instance.
- **VITE_USE_SUPABASE**: Set to `true` if you want to enable Supabase; otherwise, set it to `false`.

### Steps to Set Up

- Copy the above variables into a new `.env` file in your project root.
- Fill in the values as per your configuration.
- Restart your development server to apply the changes.

4. **Run the application**

   ```
   npm run dev

   ```

## Usage

Once the application is running, you can navigate through the different pages of the site using the navigation bar. To access the admin panel, append `/admin` to the domain URL and log in with your administrator credentials.

## Admin Panel

The admin panel is accessible at `/admin`. Use the credentials provided during the setup to log in. Once logged in, you can use the dashboard to manage the gallery, books, blog posts, and advertisements.

### Admin Panel Features

- **Dashboard**: Provides an overview of recent activities and statistics.
- **Gallery Management**: Allows the admin to add and delete images in the gallery.
- **Books Management**: Allows the admin to add, edit, and delete book entries.
- **Blog Management**: Allows the admin to add, edit, and delete blog posts.
- **Advert Management**: Allows the admin to manage advertisements displayed on the site.

## License

Distributed under the MIT License. See `LICENSE` for more information.
