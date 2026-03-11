import { AllColors, SurfaceTokens } from '@/components/demos/ColorSwatch';
import { TypeScale, HeadingHierarchy } from '@/components/demos/TypeScale';
import { SpacingScale, SpacingGuide } from '@/components/demos/SpacingDemo';
import { Callout } from '@/components/Callout';
import { InstallationCards } from '@/components/InstallationCards';
import { FrameworkSelector } from '@/components/FrameworkSelector';
import { FrameworkTabs, Tab } from '@/components/FrameworkTabs';

export default {
 'all-colors': {
   selfClosing: true,
   render: AllColors,
 },
 'surface-tokens': {
   selfClosing: true,
   render: SurfaceTokens,
 },
 'type-scale': {
   selfClosing: true,
   render: TypeScale,
 },
 'heading-hierarchy': {
   selfClosing: true,
   render: HeadingHierarchy,
 },
 'spacing-scale': {
   selfClosing: true,
   render: SpacingScale,
 },
 'spacing-guide': {
   selfClosing: true,
   render: SpacingGuide,
 },
 callout: {
   render: Callout,
   attributes: {
     type: { type: String, default: 'info' },
     title: { type: String },
   },
 },
 'installation-cards': {
   selfClosing: true,
   render: InstallationCards,
 },
 'framework-selector': {
   selfClosing: true,
   render: FrameworkSelector,
 },
 'framework-tabs': {
   render: FrameworkTabs,
 },
 tab: {
   render: Tab,
   attributes: {
     framework: { type: String, required: true },
   },
 },
};