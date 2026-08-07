/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Icon Registry
 *
 * All application icons MUST be exported from this file.
 *
 * Components should NEVER import icons directly from
 * any icon library.
 * ============================================================
 */

import {
  Activity,
  AlertCircle,
  Archive,
  ArrowLeft,
  ArrowRight,
  Bell,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Clock,
  Cloud,
  Copy,
  Cpu,
  Database,
  Download,
  Edit,
  Eye,
  EyeOff,
  File,
  FileText,
  Filter,
  Folder,
  Globe,
  HardDrive,
  HelpCircle,
  Home,
  Image,
  Info,
  Key,
  Laptop,
  LayoutDashboard,
  Link,
  Loader2,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Monitor,
  Moon,
  MoreHorizontal,
  Network,
  Package,
  Pencil,
  Plus,
  Power,
  RefreshCw,
  Save,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Sun,
  Terminal,
  Trash2,
  Upload,
  User,
  UserCog,
  Users,
  Wifi,
  Wrench,
  X,
  XCircle,
} from "lucide-react";

export interface IconRegistry {
  readonly Dashboard: typeof LayoutDashboard;
  readonly Home: typeof Home;

  readonly Server: typeof Server;
  readonly Database: typeof Database;
  readonly Network: typeof Network;
  readonly Monitor: typeof Monitor;
  readonly Cpu: typeof Cpu;
  readonly HardDrive: typeof HardDrive;
  readonly Cloud: typeof Cloud;
  readonly Terminal: typeof Terminal;

  readonly Users: typeof Users;
  readonly User: typeof User;
  readonly UserSettings: typeof UserCog;

  readonly Settings: typeof Settings;
  readonly Shield: typeof Shield;
  readonly ShieldCheck: typeof ShieldCheck;
  readonly Key: typeof Key;
  readonly Lock: typeof Lock;

  readonly Search: typeof Search;
  readonly Filter: typeof Filter;
  readonly Plus: typeof Plus;
  readonly Edit: typeof Edit;
  readonly Pencil: typeof Pencil;
  readonly Save: typeof Save;
  readonly Trash: typeof Trash2;
  readonly Copy: typeof Copy;
  readonly Refresh: typeof RefreshCw;

  readonly Upload: typeof Upload;
  readonly Download: typeof Download;

  readonly ArrowLeft: typeof ArrowLeft;
  readonly ArrowRight: typeof ArrowRight;

  readonly ChevronLeft: typeof ChevronLeft;
  readonly ChevronRight: typeof ChevronRight;
  readonly ChevronUp: typeof ChevronUp;
  readonly ChevronDown: typeof ChevronDown;

  readonly Check: typeof Check;
  readonly CheckCircle: typeof CheckCircle2;
  readonly Close: typeof X;
  readonly Error: typeof XCircle;
  readonly Warning: typeof AlertCircle;
  readonly Info: typeof Info;

  readonly Eye: typeof Eye;
  readonly EyeOff: typeof EyeOff;

  readonly Bell: typeof Bell;
  readonly Calendar: typeof Calendar;
  readonly Clock: typeof Clock;

  readonly Folder: typeof Folder;
  readonly File: typeof File;
  readonly FileText: typeof FileText;
  readonly Image: typeof Image;
  readonly Package: typeof Package;
  readonly Archive: typeof Archive;

  readonly Globe: typeof Globe;
  readonly Wifi: typeof Wifi;
  readonly Laptop: typeof Laptop;
  readonly Smartphone: typeof Smartphone;
  readonly Building: typeof Building2;

  readonly Login: typeof LogIn;
  readonly Logout: typeof LogOut;

  readonly Mail: typeof Mail;
  readonly Link: typeof Link;

  readonly Menu: typeof Menu;
  readonly More: typeof MoreHorizontal;

  readonly Activity: typeof Activity;
  readonly Loading: typeof Loader2;
  readonly Circle: typeof Circle;

  readonly Sun: typeof Sun;
  readonly Moon: typeof Moon;

  readonly Help: typeof HelpCircle;
  readonly Power: typeof Power;
  readonly Tools: typeof Wrench;
}

export const Icons: Readonly<IconRegistry> = Object.freeze({
  Dashboard: LayoutDashboard,
  Home,

  Server,
  Database,
  Network,
  Monitor,
  Cpu,
  HardDrive,
  Cloud,
  Terminal,

  Users,
  User,
  UserSettings: UserCog,

  Settings,
  Shield,
  ShieldCheck,
  Key,
  Lock,

  Search,
  Filter,
  Plus,
  Edit,
  Pencil,
  Save,
  Trash: Trash2,
  Copy,
  Refresh: RefreshCw,

  Upload,
  Download,

  ArrowLeft,
  ArrowRight,

  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,

  Check,
  CheckCircle: CheckCircle2,
  Close: X,
  Error: XCircle,
  Warning: AlertCircle,
  Info,

  Eye,
  EyeOff,

  Bell,
  Calendar,
  Clock,

  Folder,
  File,
  FileText,
  Image,
  Package,
  Archive,

  Globe,
  Wifi,
  Laptop,
  Smartphone,
  Building: Building2,

  Login: LogIn,
  Logout: LogOut,

  Mail,
  Link,

  Menu,
  More: MoreHorizontal,

  Activity,
  Loading: Loader2,
  Circle,

  Sun,
  Moon,

  Help: HelpCircle,
  Power,
  Tools: Wrench,
});