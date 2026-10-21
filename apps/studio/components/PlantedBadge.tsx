// W3 #341 proof: a source studio host inside a TSX component with self-closing JSX.
import { deployTarget } from '../schemas/plantedDeployTarget';

export function PlantedBadge(props: { label?: string }) {
  const href = `https://yrufhwriwhmm.sanity.studio/${deployTarget.appId}`;
  return <a href={href}>{props.label ?? 'source'}<span className="badge" /></a>;
}
