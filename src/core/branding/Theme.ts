/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Theme Object
 *
 * Every application component should consume branding
 * information through this object.
 * ============================================================
 */

import { Brand } from "./Brand";
import { Colors } from "./Colors";
import { Typography } from "./Typography";
import { Logos } from "./Logos";
import { Icons } from "./Icons";
import { Images } from "./Images";
import { Config } from "./Config";

export const Theme = Object.freeze({
  Brand,

  Colors,

  Typography,

  Logos,

  Icons,

  Images,

  Config,
});

export type ThemeType = typeof Theme;