import { useEffect, useCallback } from "react";
import { X, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export interface TeamMemberFull {
  name: string;
  role: string;
  category: string;
  focus: string;
  bio: string;
  fullBio: string;
  philosophy: string;
  photo?: string;
  expertise: string[];
  linkedin?: string;
  location?: string;
}

interface TeamProfilePanelProps {
  member: TeamMemberFull | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  prevName?: string;
  nextName?: string;
}

const TeamProfilePanel = ({
  member,
  isOpen,
  onClose,
  onPrev,
  onNext,
  prevName,
  nextName,
}: TeamProfilePanelProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!member) return null;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-[480px] overflow-y-auto p-0 bg-background border-border">
        <div className="p-6 sm:p-8">
          <SheetHeader className="sr-only">
            <SheetTitle>{member.name}</SheetTitle>
          </SheetHeader>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/80 transition-colors z-10"
            aria-label="Close profile"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Photo */}
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-36 h-36 mx-auto mt-4 rounded-full object-cover object-top border-2 border-border"
            />
          ) : (
            <div className="w-36 h-36 mx-auto mt-4 rounded-full bg-secondary/60 border-2 border-border flex items-center justify-center">
              <span className="font-display text-4xl font-bold text-muted-foreground/40">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          )}

          {/* Name & Title */}
          <div className="text-center mt-6">
            <h2 className="font-display text-2xl font-bold text-foreground">{member.name}</h2>
            <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
            {member.location && (
              <p className="text-xs text-muted-foreground mt-2">{member.location}</p>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 my-6" />

          {/* Full Bio */}
          <div className="space-y-4">
            {member.fullBio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-[13px] leading-relaxed text-muted-foreground font-body">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 my-6" />

          {/* Expertise */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.15em] text-dim mb-3 font-body">
              Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-[11px] font-body bg-secondary/60 text-muted-foreground border-border/40"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 my-6" />

          {/* Links */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          )}

          {/* Philosophy */}
          <div className="mt-6 p-4 rounded-sm bg-secondary/30 border-l-2 border-primary/30">
            <p className="text-[12px] italic text-foreground/50 font-body leading-relaxed">
              "{member.philosophy}"
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 my-6" />

          {/* Prev/Next Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 text-[12px] text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{prevName}</span>
              <span className="sm:hidden">Prev</span>
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-1 text-[12px] text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <span className="hidden sm:inline">{nextName}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TeamProfilePanel;
