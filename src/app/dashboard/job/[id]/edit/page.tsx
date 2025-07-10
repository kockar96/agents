import { JobEditView } from "src/sections/job/view";

// ----------------------------------------------------------------------

type Props = {
  params: {
    id: string;
  };
};

export default function JobEditPage({ params }: Props) {
  return <JobEditView id={params.id} />;
}
