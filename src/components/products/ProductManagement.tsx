"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import Button from "../ui/button/Button";
import { PlusIcon, FileIcon } from "@/icons";
import Pagination from "../tables/Pagination";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  status: "active" | "inactive" | "pending";
  image: string;
  impressions: number;
  clicks: number;
  promotion?: {
    type: "highlight" | "pin" | "sponsored";
    expiresAt: string;
    autoRenew?: boolean;
  };
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    category: "Electronics",
    price: "$299.99",
    status: "active",
    image: "/images/product/product-01.jpg",
    impressions: 1250,
    clicks: 89,
    promotion: {
      type: "highlight",
      expiresAt: "2024-04-01",
    },
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: "$199.99",
    status: "inactive",
    image: "/images/product/product-02.jpg",
    impressions: 850,
    clicks: 45,
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "Audio",
    price: "$149.99",
    status: "pending",
    image: "/images/product/product-03.jpg",
    impressions: 620,
    clicks: 32,
    promotion: {
      type: "sponsored",
      expiresAt: "2024-03-25",
    },
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Wearables",
    price: "$199.99",
    status: "inactive",
    image: "/images/product/product-04.jpg",
    impressions: 850,
    clicks: 45,
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Wearables",
    price: "$199.99",
    status: "inactive",
    image: "/images/product/product-05.jpg",
    impressions: 850,
    clicks: 45,
  },
];

const promotionTiers = [
  {
    name: "Highlight",
    price: "$49.99",
    period: "per month",
    description: "Make your listing stand out",
    icon: "✨",
    features: ["Highlighted background", "30-day duration", "Auto-renew option"]
  },
  {
    name: "Pin",
    price: "$99.99",
    period: "per month",
    description: "Top of search results",
    icon: "📌",
    features: ["Priority placement", "60-day duration", "Auto-renew option"]
  },
  {
    name: "Sponsored",
    price: "$199.99",
    period: "per month",
    description: "Maximum visibility",
    icon: "🚀",
    features: ["Premium placement", "90-day duration", "Auto-renew option"]
  },
];

const categories = ["All", "Electronics", "Wearables", "Audio"];
const statuses = ["All", "Active", "Inactive", "Pending"];

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPromotionModal, setShowPromotionModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    category: "",
    price: "",
    status: "pending",
    image: "",
  });

  const ITEMS_PER_PAGE = 3;

  const getPaginatedProducts = (products: Product[]) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddProduct = () => {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    const productToAdd: Product = {
      id: newId,
      name: newProduct.name || "",
      category: newProduct.category || "",
      price: newProduct.price || "",
      status: newProduct.status || "pending",
      image: newProduct.image || "/images/product/default.jpg",
      impressions: 0,
      clicks: 0,
    };
    setProducts([...products, productToAdd]);
    setShowAddProductModal(false);
    setNewProduct({
      name: "",
      category: "",
      price: "",
      status: "pending",
      image: "",
    });
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowEditProductModal(true);
  };

  const handleUpdateProduct = () => {
    if (!selectedProduct) return;
    setProducts(products.map(p =>
      p.id === selectedProduct.id ? selectedProduct : p
    ));
    setShowEditProductModal(false);
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleBulkUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n');

      const newProducts = rows.slice(1).map((row, index) => {
        const values = row.split(',');
        return {
          id: products.length + index + 1,
          name: values[0] || "",
          category: values[1] || "",
          price: values[2] || "",
          status: (values[3] || "pending") as "active" | "inactive" | "pending",
          image: values[4] || "/images/product/default.jpg",
          impressions: 0,
          clicks: 0,
        };
      });

      setProducts([...products, ...newProducts]);
    };
    reader.readAsText(file);
  };

  const handlePromotionSelect = (product: Product, tier: string, autoRenew: boolean = false) => {
    const updatedProduct = {
      ...product,
      promotion: {
        type: tier.toLowerCase() as "highlight" | "pin" | "sponsored",
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        autoRenew
      }
    };
    setProducts(products.map(p => p.id === product.id ? updatedProduct : p));
    setShowPromotionModal(false);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || product.status === selectedStatus.toLowerCase();
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const paginatedProducts = getPaginatedProducts(filteredProducts);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            startIcon={<PlusIcon />}
            onClick={() => setShowAddProductModal(true)}
            className="border-2 border-[var(--color-gray-800)] hover:bg-[var(--color-gray-800)] hover:text-white transition-colors"
          >
            Add New Product
          </Button>
          <div className="relative">
            <input
              type="file"
              accept=".csv, .pdf"
              onChange={handleBulkUpload}
              className="hidden"
              id="bulk-upload"
            />
            <label
              htmlFor="bulk-upload"
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border-2 border-[var(--color-gray-800)] rounded-lg hover:bg-[var(--color-gray-800)] hover:text-white transition-colors"
            >
              <FileIcon />
              Bulk Upload
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border-2 border-[var(--color-gray-800)] bg-[#fff] dark:bg-[#000] px-4 py-2 pl-10 text-sm text-[#000] dark:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[var(--color-gray-800)] transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000] dark:text-[#fff]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="border-2 border-[var(--color-gray-800)] hover:bg-[var(--color-gray-800)] hover:text-white transition-colors"
          >
            Filters
          </Button>
        </div>
      </div>

      {/* Filters Section */}
      {showFilters && (
        <div className="rounded-lg border-2 border-[var(--color-gray-800)] bg-[#fff] dark:bg-[#000] p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#000] dark:text-[#fff]">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-lg border-2 border-[var(--color-gray-800)] bg-[#fff] dark:bg-[#000] px-4 py-2 text-sm text-[#000] dark:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[var(--color-gray-800)] transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-[#fff] dark:bg-[#000]">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#000] dark:text-[#fff]">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full rounded-lg border-2 border-[var(--color-gray-800)] bg-[#fff] dark:bg-[#000] px-4 py-2 text-sm text-[#000] dark:text-[#fff] focus:outline-none focus:ring-2 focus:ring-[var(--color-gray-800)] transition-colors"
              >
                {statuses.map((status) => (
                  <option key={status} value={status} className="bg-[#fff] dark:bg-[#000]">
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="overflow-hidden rounded-lg border border-gray-100 bg-white dark:border-gray-800 dark:bg-white/[0.02]">
        <div className="flex flex-col gap-2 mb-4 px-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
            Product Listings ({filteredProducts.length})
          </h3>
        </div>

        <div className="max-w-full overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-50/50 dark:bg-gray-900/50">
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Product
                </TableCell>
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Category
                </TableCell>
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Price
                </TableCell>
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Status
                </TableCell>
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Analytics
                </TableCell>
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Promotion
                </TableCell>
                <TableCell isHeader className="py-2.5 px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <TableCell className="py-2.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded">
                        <Image
                          width={40}
                          height={40}
                          src={product.image}
                          className="h-10 w-10 object-cover"
                          alt={product.name}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300">
                    {product.category}
                  </TableCell>
                  <TableCell className="py-2.5 px-4 text-sm text-gray-900 dark:text-gray-100">
                    {product.price}
                  </TableCell>
                  <TableCell className="py-2.5 px-4">
                    <Badge
                      size="sm"
                      color={
                        product.status === "active"
                          ? "success"
                          : product.status === "pending"
                            ? "warning"
                            : "error"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-2.5 px-4">
                    <div className="space-y-0.5">
                      <p className="text-sm text-gray-600 dark:text-gray-300">Impressions: {product.impressions}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Clicks: {product.clicks}</p>
                      <p className="text-xs text-gray-400">
                        CTR: {((product.clicks / product.impressions) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5 px-4">
                    {product.promotion ? (
                      <div className="space-y-1">
                        <Badge size="sm" color="success">
                          {product.promotion.type}
                        </Badge>
                        <p className="text-xs text-gray-400">
                          Expires: {new Date(product.promotion.expiresAt).toLocaleDateString()}
                        </p>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowPromotionModal(true);
                        }}
                      >
                        Add Promotion
                      </Button>
                    )}
                  </TableCell>
                  <TableCell className="py-2.5 px-4">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDeleteProduct(product.id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-4 border-t border-gray-100 dark:border-gray-800">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-[#000]/80 flex items-center justify-center z-[999999]">
          <div className="bg-[#fff] dark:bg-[#000] w-[80%] max-w-[600px] rounded-xl shadow-2xl border-2 border-[var(--color-gray-800)] p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#000] dark:text-[#fff]">Add New Product</h3>
              <button onClick={() => setShowAddProductModal(false)}>✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                >
                  <option value="">Select Category</option>
                  {categories.filter(c => c !== "All").map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                />
              </div>
              <Button
                variant="primary"
                onClick={handleAddProduct}
                className="w-full"
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-[#000]/80 flex items-center justify-center z-[999999]">
          <div className="bg-[#fff] dark:bg-[#000] w-[80%] max-w-[600px] rounded-xl shadow-2xl border-2 border-[var(--color-gray-800)] p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#000] dark:text-[#fff]">Edit Product</h3>
              <button onClick={() => setShowEditProductModal(false)}>✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Product Name</label>
                <input
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={selectedProduct.category}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                >
                  {categories.filter(c => c !== "All").map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="text"
                  value={selectedProduct.price}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={selectedProduct.status}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, status: e.target.value as "active" | "inactive" | "pending" })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={selectedProduct.image}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
                  className="w-full rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2"
                />
              </div>
              <Button
                variant="primary"
                onClick={handleUpdateProduct}
                className="w-full"
              >
                Update Product
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Promotion Modal */}
      {showPromotionModal && selectedProduct && (
        <div className="fixed inset-0 bg-[#000]/80 flex items-center justify-center z-[999999]">
          <div className="bg-[#fff] dark:bg-[#000] w-[90%] max-w-[600px] rounded-xl shadow-2xl border-2 border-[var(--color-gray-800)]">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Add Promotion
                </h3>
                <button
                  onClick={() => setShowPromotionModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 mb-6">
                {promotionTiers.map((tier) => (
                  <div
                    key={tier.name}
                    onClick={() => handlePromotionSelect(selectedProduct, tier.name)}
                    className="cursor-pointer group border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-[var(--color-gray-800)] transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{tier.icon}</span>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{tier.name}</h4>
                    </div>
                    <div className="mb-1">
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{tier.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/mo</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{tier.description}</p>
                    <ul className="space-y-1">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                          <span className="mr-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-gray-600"
                    onChange={(e) => {
                      const autoRenew = e.target.checked;
                      // Store auto-renew preference
                      localStorage.setItem('promotionAutoRenew', String(autoRenew));
                    }}
                  />
                  Enable auto-renewal
                </label>
                <Button
                  variant="primary"
                  className="px-6"
                  onClick={() => setShowPromotionModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 