/**
 * The layer registry. entry.ts creates every factory below for each mounted view; the engine sorts the layers
 * by `renderOrder`, so list order does not matter. To add a layer append ONE import line and ONE array line.
 */
import type { LayerFactory } from '../layer'
import { createBackgroundLayer } from './background'
import { createStarsLayer } from './stars'
import { createLabelsLayer } from './labels'
import { createLinksLayer } from './links'
import { createPacketsLayer } from './packets'
import { createSparksLayer } from './sparks'
import { createRipplesLayer } from './ripples'
import { createDustLayer } from './dust'
import { createFlareLayer } from './flare'
import { createOrbLayer } from './orb'
import { createNodesLayer } from './nodes'
import { createChoreoLayer } from './choreo'
import { createOrbitsLayer } from './orbits'
// Later phases append here:
//   import { createOrbLayer } from './orb'          (Phase 4)
//   import { createNodesLayer } from './nodes'      (Phase 5)
//   import { createLinksLayer } from './links'      (Phase 6)
//   ...

export const layerFactories: LayerFactory[] = [
  createBackgroundLayer,
  createStarsLayer,
  createLabelsLayer,
  createLinksLayer,
  createPacketsLayer,
  createSparksLayer,
  createRipplesLayer,
  createDustLayer,
  createFlareLayer,
  createOrbLayer,
  createNodesLayer,
  createChoreoLayer,
  createOrbitsLayer,
  // createLinksLayer,
]
