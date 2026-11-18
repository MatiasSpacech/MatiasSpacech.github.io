import type { AppId } from '../../lib/apps';
import AboutApp from './AboutApp';
import ContactApp from './ContactApp';
import CVApp from './CVApp';
import ExperienceApp from './ExperienceApp';
import HomeApp from './HomeApp';
import ProjectsApp from './ProjectsApp';
import SkillsApp from './SkillsApp';
import TerminalApp from './TerminalApp';

export default function AppContent({
  appId,
  onNavigate,
}: {
  appId: AppId;
  onNavigate: (id: AppId) => void;
}) {
  switch (appId) {
    case 'inicio':
      return <HomeApp onNavigate={onNavigate} />;
    case 'proyectos':
      return <ProjectsApp />;
    case 'sobre-mi':
      return <AboutApp onNavigate={onNavigate} />;
    case 'skills':
      return <SkillsApp />;
    case 'experiencia':
      return <ExperienceApp onNavigate={onNavigate} />;
    case 'cv':
      return <CVApp />;
    case 'contacto':
      return <ContactApp />;
    case 'terminal':
      return <TerminalApp onNavigate={onNavigate} />;
    default:
      return null;
  }
}
