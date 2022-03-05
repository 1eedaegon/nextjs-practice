import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

interface DetailProps {
  params: string[] | string;
}

interface GetServerSideProps {
  params: {
    params: string | string[];
  };
}

export default function Detail({ params }: DetailProps) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: GetServerSideProps) {
  return { props: { params } };
}
