# **Express API**

A simple Node.js API built with Express for performing CRUD operations. This project demonstrates the creation, reading, updating, and deleting of items. The API was tested using Postman and deployed to Render.

---

## **Features**
- Create, Read, Update, and Delete (CRUD) operations for items.
- Robust error handling.
- Tested endpoints using Postman.
- Deployed to Render for live access.

---

## **Getting Started**

### **Prerequisites**
- Node.js installed.
- Postman for testing the API.
- A Render account for deployment.

---

### **Installation**
1. Clone the repository:
```bash
git clone https://github.com/yourusername/express-api.git
cd express-api
```
2. Install dependencies:

```bash
npm install
```
3. Start the server:

```bash
npm run dev
```
The server will start at http://localhost:5000.

## **API Endpoints**

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | `/api/items`       | Create a new item         |
| GET    | `/api/items`       | Get all items             |
| PUT    | `/api/items/:id`   | Update an existing item   |
| DELETE | `/api/items/:id`   | Delete an item            |

## **Testing with Postman**
Here’s how the API endpoints were tested:

### 1. **Create an Item**

- **Method: POST**
- **URL: https://express-api-5ocy.onrender.com/api/items**
- **Body:**
```json
{
  "name": "Item 1",
  "price": 100
}
```

- **Screenshot:**
![create](https://github.com/user-attachments/assets/58a077ad-2eaf-4b85-9535-986090d5c4b3)

### **2. Get All Items**
- **Method: GET**
- **URL: https://express-api-5ocy.onrender.com/api/items**

- **Screenshot:**
![get](https://github.com/user-attachments/assets/9cfc10c7-34fa-4f53-b249-dd1c72832d19)

### **3. Update an Item**
- **Method: PUT**
- **URL: https://express-api-5ocy.onrender.com/api/items/:id**
- **Body:**
```json
{
  "name": "Updated Item",
  "price": 150
}
```
- **Screenshot:**
![put](https://github.com/user-attachments/assets/a4815c22-b958-4ee2-80a2-02e9c4c450fb)


### **4. Delete an Item**
- **Method: DELETE**
- **URL: https://express-api-5ocy.onrender.com/api/items/:id**
- **Screenshot:**
![delete](https://github.com/user-attachments/assets/d9992ad3-d12a-4899-a8c4-3bc8ad7f9fd4)


## **Deployment**
This application was deployed to Render. Access the live version here:
- GitHub Repository: https://www.github.com/globalsmile/express-api
- Live Preview: https://express-api-5ocy.onrender.com
## **My Experience Working on the Assignment**
### **Setting Up the Project**

Working on this assignment solidified my knowledge of Node.js and Express. Setting up the project and defining the API endpoints was straightforward. Using Express simplified handling requests and responses.

### **Challenges and Solutions**

One challenge I faced was ensuring that the API endpoints correctly handled errors, such as when an item was not found during an update or delete operation. To resolve this, I implemented proper HTTP status codes and error messages.

### **Testing with Postman**
Postman was invaluable for verifying the functionality of each endpoint. I enjoyed seeing the responses and quickly identifying areas for improvement.

### **Git Workflow**
Using Git branches (main and development) kept the workflow organized. It was satisfying to merge the development branch after successfully testing the API.

### **Deploying to Render**
Deploying the application to Render was seamless. Connecting my GitHub repository and automating deployments simplified the process.

### **Conclusion**
This project helped me reinforce my skills in:

- Building REST APIs using Node.js and Express.
- Testing endpoints using Postman.
- Deploying applications on cloud platforms like Render.
