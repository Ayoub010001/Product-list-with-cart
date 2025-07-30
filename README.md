# 🛍️ Product List with Cart – Frontend Mentor Challenge

A responsive e-commerce product listing page built with **Angular**, using **RxJS Observables** for state management and **JSON Server** as a mock backend. Users can browse products, add them to a cart, and manage cart quantities in real-time.

---

## 🚀 Tech Stack

- **Angular** for component-based architecture
- **RxJS** for reactive state management
- **SCSS** for styling
- **TypeScript** for type safety
- **JSON Server** as a fake RESTful API

---

## 📸 Demo

![Alt text](/public/preview/Screencapture.png)

---

## 📦 Features

- ✅ Fetch product list from a fake API (`json-server`)
- ✅ Display products with name, price, image
- ✅ Add and remove products from cart
- ✅ Increase/decrease product quantity
- ✅ Calculate and display total price
- ✅ Reactive UI updates with `BehaviorSubject` and `Observables`
- ✅ Mobile-first responsive layout

---

## 🧱 Project Structure

├── app
|  ├── app-routing.module.ts
|  ├── app.component.html
|  ├── app.component.scss
|  ├── app.component.spec.ts
|  ├── app.component.ts
|  ├── app.module.ts
|  ├── components
|  |  ├── cart-item
|  |  ├── product-card
|  |  ├── products-cart
|  |  └── products-list
|  ├── env
|  |  └── env.ts
|  ├── models
|  |  ├── cart-product.model.ts
|  |  └── product.model.ts
|  ├── services
|  |  ├── cart-service.ts
|  |  └── products-service.ts
|  └── ui
|     └── add-to-cart-btn
├── assets
|  └── fonts
|     ├── OFL.txt
|     ├── README.txt
|     ├── RedHatText-Italic-VariableFont_wght.ttf
|     ├── RedHatText-VariableFont_wght.ttf
|     └── static
├── index.html
├── main.ts
└── styles.scss