
# FAQs App

The FAQs App is a self-service portal and central repository of information, designed to provide quick answers to frequently posed questions about a company's goods or services. Built with Django for the backend and React for the frontend, this app allows users to search through a categorized list of articles and FAQs, ensuring they find the information they need efficiently. The interface is styled with Material-UI for a polished look, and the app includes robust search functionality for easy navigation.

## Features

- **Categorized FAQs**: Browse FAQs by category to quickly find relevant information.
- **Search Functionality**: Search bar to filter articles and FAQs based on the search query.
- **Material-UI Styling**: A polished and responsive user interface.
- **RESTful API**: Built with Django Rest Framework for managing FAQs and articles.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Django, Django Rest Framework
- **Database**: SQLite (for development), PostgreSQL (for production)

## Installation

### Prerequisites

- Node.js and npm
- Python 3.8+
- Django 3.2+
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ajmalrasouli/faqs-app.git
   cd faqs-app
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scriptsctivate`
   ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply the migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser to access the Django admin:
   ```bash
   python manage.py createsuperuser
   ```

6. Run the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required npm packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

### Running the App

- Open your browser and go to `http://localhost:3000` to view the React frontend.
- Access the Django admin at `http://localhost:8000/admin` to manage FAQs and articles.

## Usage

- Use the search bar to filter FAQs and articles.
- Browse categories to find information on specific topics.
- Admin users can add, update, and delete FAQs and articles via the Django admin interface.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
