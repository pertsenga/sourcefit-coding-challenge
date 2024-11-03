import React, { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout'
import axios from 'axios'
import { Image, Input, List, Space } from 'antd'
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query'

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  }
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
  images: string[];
  thumbnail: string;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Response {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export default function Index() {
    const [searchTerm, setSearchTerm] = useState('');

    const fetchProducts = async (): Promise<Response> => {
      const response = await axios.get('/products/search', { params: { q: searchTerm } })

      return response.data
    }

    const { data, isLoading } = useQuery({
      queryKey: ['productsData', { searchTerm }],
      queryFn: fetchProducts
    })

    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );

    return (
        <GuestLayout>
          <Input.Search
            placeholder='Search for products'
            allowClear
            onSearch={(value) => setSearchTerm(value)}
          />
          <List
            className='mt-4'
            itemLayout='vertical'
            size='large'
            pagination={{
              pageSize: 7
            }}
            loading={isLoading}
            dataSource={data?.products}
            renderItem={(product) => (
              <List.Item
                key={product.id}
                extra={
                  <Image
                    className='mt-4'
                    width={150}
                    placeholder={true}
                    src={product.thumbnail}
                  />
                }
                actions={[
                  <IconText icon={StarOutlined} text={`${product.rating}/5`} key="list-vertical-star-o" />,
                  <IconText icon={MessageOutlined} text={`${product.reviews.length} reviews`} key="list-vertical-message" />,
                ]}
              >
                <List.Item.Meta
                  title={product.title}
                  description={`${product.price} USD`}
                />
                {product.description}
              </List.Item>
            )}
          />
        </GuestLayout>
    );
}
