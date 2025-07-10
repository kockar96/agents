import { JobDetailsView } from "src/sections/job/view";

// ----------------------------------------------------------------------

type Props = {
  params: {
    id: string;
  };
};

export default function JobDetailsPage({ params }: Props) {
  return <JobDetailsView id={params.id} />;
}
