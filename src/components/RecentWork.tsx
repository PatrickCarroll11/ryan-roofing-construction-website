import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const RecentWork = () => {
  // Show 6 recent projects, ensuring residentialshed1 is included and comercialshed4 is excluded
  const featured = projects
    .filter((p) => p.id !== "comercialshed4")
    .slice(0, 6);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse some of our recently completed steel shed projects across Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/projects">
              View All Projects <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
