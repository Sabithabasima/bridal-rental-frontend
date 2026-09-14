import ProductDetailsContent from "@/components/catalog/ProductDetailsContent";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  return <ProductDetailsContent productId={id} />;
}