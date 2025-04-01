export interface MenuItem {
  id: number
  name: string
  price: number
  description: string
  category: string
  image?: string
}

export const menuItems: MenuItem[] = [
  // Main Course
  {
    id: 1,
    name: "Classic Burger",
    price: 12.99,
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 14.99,
    description: "Fresh tomatoes, mozzarella, and basil on thin crust",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    price: 24.99,
    description: "Fresh salmon with seasonal vegetables",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop"
  },

  // Appetizers
  {
    id: 4,
    name: "Bruschetta",
    price: 8.99,
    description: "Toasted bread with tomatoes, garlic, and basil",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Calamari",
    price: 10.99,
    description: "Crispy fried squid with marinara sauce",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=300&fit=crop"
  },

  // Desserts
  {
    id: 6,
    name: "Tiramisu",
    price: 7.99,
    description: "Classic Italian dessert with coffee and mascarpone",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Ice Cream Sundae",
    price: 6.99,
    description: "Vanilla ice cream with hot fudge and nuts",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop"
  },

  // Beverages
  {
    id: 8,
    name: "Espresso",
    price: 3.99,
    description: "Double shot of premium Italian espresso",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=300&fit=crop"
  },
  {
    id: 9,
    name: "Fresh Smoothie",
    price: 5.99,
    description: "Blend of seasonal fruits with yogurt",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=500&h=300&fit=crop"
  }
] 