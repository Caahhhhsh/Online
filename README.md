# Online Admin Panel

A modern React-based admin panel for managing e-commerce products with Firebase integration.

## Features

✅ **Product Management**
- Add new products with images
- Edit existing products
- Delete products
- Real-time product list updates

✅ **Firebase Integration**
- Firestore database for product storage
- Firebase Storage for product images
- Firebase Authentication for admin login

✅ **User Authentication**
- Email/password login
- Account registration
- Secure logout

✅ **Responsive Design**
- Mobile-friendly interface
- Clean and intuitive UI

## Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn package manager
- A Firebase project account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Caahhhhsh/Online.git
cd Online
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Firebase configuration to `.env`:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Getting Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Go to Project Settings → General
4. Copy your Firebase config and paste it into `.env`

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Firebase Setup

### Enable Authentication
1. Go to Firebase Console → Authentication
2. Click "Get started"
3. Enable "Email/Password" provider

### Create Firestore Database
1. Go to Firebase Console → Firestore Database
2. Click "Create database"
3. Start in test mode (for development)
4. Create a collection called "products"

### Setup Storage
1. Go to Firebase Console → Storage
2. Click "Get started"
3. Create a bucket for product images

## Project Structure

```
src/
├── components/
│   ├── Login.js          # Authentication component
│   ├── Login.css
│   ├── ProductForm.js    # Form to add/upload products
│   ├── ProductForm.css
│   ├── ProductList.js    # Display and manage products
│   └── ProductList.css
├── App.js                # Main app component
├── App.css
├── firebase.js           # Firebase configuration
├── index.js
└── index.css
```

## Usage

1. **Login/Sign Up**: Create an account or login with existing credentials
2. **Add Product**: Fill the form with product details and image, then submit
3. **View Products**: See all products in the products list
4. **Edit Product**: Click edit button to modify product details
5. **Delete Product**: Click delete to remove a product

## Product Fields

- **Name**: Product name (required)
- **Price**: Product price (required)
- **Category**: Product category (required)
- **Stock**: Quantity in stock (required)
- **Description**: Product description (optional)
- **Image**: Product image file (optional)

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production.

### `npm test`
Launches the test runner.

## Technologies Used

- **React 18** - UI library
- **Firebase 10** - Backend services
- **React Router** - Navigation
- **CSS3** - Styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Products not loading?
- Check Firebase Firestore connection
- Verify Firebase credentials in `.env`
- Check browser console for errors

### Images not uploading?
- Verify Firebase Storage bucket is created
- Check file size is under 5MB
- Ensure file is an image format

### Authentication issues?
- Enable Email/Password in Firebase Authentication
- Check email format is valid
- Verify `.env` variables are correct

## Future Enhancements

- [ ] Product search and filtering
- [ ] Product categories management
- [ ] Inventory tracking
- [ ] Sales analytics
- [ ] Customer management
- [ ] Order tracking

## License

MIT License

## Support

For issues or questions, please open a GitHub issue.

## Author

Caahhhhsh
