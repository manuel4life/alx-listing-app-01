export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  category: string[];
  rating: number;
  offers: Offers;
  image: string;
  discount: string;
  price: number;
  description: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyDetailProps {
  property: PropertyProps;
}

export interface BookingSectionProps {
  price: number;
}