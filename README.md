# Project Innovation Lab

This is a Next.js project for building a web application for InnovationLab. This project includes a comprehensive UI component library built with TypeScript, Tailwind CSS, and modern React patterns.

## Table of Contents

- [Installation](#installation)
- [Run the Application](#run-the-application)
- [UI Component Library](#ui-component-library)
  - [Core Components](#core-components)
  - [Form Components](#form-components)
  - [Data Display](#data-display)
  - [Navigation](#navigation)
  - [Feedback](#feedback)
  - [Overlay](#overlay)
- [Component Usage Examples](#component-usage-examples)
- [Mock the API with Prism](#mock-the-api-with-prism)
- [View API Specification](#view-api-specification)

## Installation

1. Clone the repository:

   https:

   ```bash
   git clone https://github.com/InnovationLabAtIIC/InnovationLabWebFrontend.git
   ```

   ssh:

   ```bash
   git clone git@github.com:InnovationLabAtIIC/InnovationLabWebFrontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd InnovationLabWebFrontend/
   ```
3. Install the required dependencies:
   ```bash
   npm install
   # or
   npm i
   ```

## Run the Application

1. To run the Next.js application locally, use the following command:
   ```bash
   npm run dev
   ```
2. Visit http://localhost:3000 in your browser to see the running application.
3. Visit http://localhost:3000/components to see the UI component showcase and documentation.

## UI Component Library

The IVLAB project includes a comprehensive UI component library built with TypeScript and Tailwind CSS. All components are fully typed, accessible, and customizable.

### Core Components

#### Typography
Text component with multiple variants, sizes, and styling options.

```tsx
import { Typography } from '@/components/ui';

<Typography variant="h1" color="primary">Heading</Typography>
<Typography variant="body" weight="medium">Body text</Typography>
```

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption'
- `color`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted'
- `weight`: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
- `align`: 'left' | 'center' | 'right' | 'justify'

#### Button
Versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" loading>Loading...</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean

#### MagneticButton
Interactive button with magnetic hover effect.

```tsx
import { MagneticButton } from '@/components/ui';

<MagneticButton>Hover me</MagneticButton>
```

#### Card
Container component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui';

<Card>
  <CardHeader>Header Content</CardHeader>
  <CardContent>Main Content</CardContent>
  <CardFooter>Footer Content</CardFooter>
</Card>
```

### Form Components

#### Input
Text input with validation states and various configurations.

```tsx
import { Input } from '@/components/ui';

<Input 
  label="Email" 
  type="email" 
  placeholder="Enter your email"
  error="Invalid email format"
/>
```

**Props:**
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
- `label`: string
- `placeholder`: string
- `error`: string
- `disabled`: boolean

#### Select
Dropdown component with search, multi-select, and validation.

```tsx
import { Select } from '@/components/ui';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' }
];

<Select 
  options={options}
  placeholder="Select an option"
  searchable
  clearable
/>
```

**Props:**
- `options`: Array of `{ label: string, value: string }`
- `multiple`: boolean
- `searchable`: boolean
- `clearable`: boolean
- `error`: string

#### Checkbox
Checkbox input with indeterminate state support.

```tsx
import { Checkbox } from '@/components/ui';

<Checkbox label="I agree to terms" />
<Checkbox indeterminate label="Select all" />
```

#### Radio & RadioGroup
Radio button components for single selection.

```tsx
import { Radio, RadioGroup } from '@/components/ui';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' }
];

<RadioGroup options={options} value={value} onChange={setValue} />
```

#### Switch
Toggle switch component for boolean values.

```tsx
import { Switch } from '@/components/ui';

<Switch label="Enable notifications" />
```

### Data Display

#### Badge
Small status indicator with multiple variants.

```tsx
import { Badge } from '@/components/ui';

<Badge variant="success">Active</Badge>
<Badge variant="warning" size="lg">Pending</Badge>
```

**Props:**
- `variant`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md' | 'lg'

#### Avatar
User profile image with fallback and status indicators.

```tsx
import { Avatar } from '@/components/ui';

<Avatar 
  src="/profile.jpg" 
  alt="John Doe" 
  size="lg"
  status="online"
/>
```

**Props:**
- `src`: string
- `alt`: string
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `shape`: 'circle' | 'square'
- `status`: 'online' | 'offline' | 'away' | 'busy'

#### Progress
Progress bar with multiple variants and states.

```tsx
import { Progress } from '@/components/ui';

<Progress value={75} variant="primary" />
<Progress indeterminate variant="gradient" />
```

**Props:**
- `value`: number (0-100)
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gradient'
- `indeterminate`: boolean
- `striped`: boolean
- `animated`: boolean

#### Spinner
Loading indicator with multiple animation types.

```tsx
import { Spinner } from '@/components/ui';

<Spinner type="spin" size="md" />
<Spinner type="pulse" color="primary" />
```

**Props:**
- `type`: 'spin' | 'pulse' | 'dots' | 'bars' | 'ring'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'white'

### Navigation

#### Breadcrumb
Navigation breadcrumbs for showing current page location.

```tsx
import { Breadcrumb } from '@/components/ui';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Laptops' }
];

<Breadcrumb items={items} />
```

#### Tabs
Tabbed interface with multiple styling variants.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@/components/ui';

<Tabs defaultValue="tab1" variant="underline">
  <TabList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Content 1</TabPanel>
    <TabPanel value="tab2">Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

**Props:**
- `variant`: 'underline' | 'pills' | 'bordered'
- `orientation`: 'horizontal' | 'vertical'

### Feedback

#### Alert
Alert messages with dismissible functionality.

```tsx
import { Alert } from '@/components/ui';

<Alert variant="success" dismissible>
  Operation completed successfully!
</Alert>
```

**Props:**
- `variant`: 'info' | 'success' | 'warning' | 'error'
- `dismissible`: boolean
- `icon`: boolean

### Overlay

#### Modal
Modal dialog with header, body, and footer sections.

```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/components/ui';

<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalHeader>Modal Title</ModalHeader>
  <ModalBody>Modal content goes here</ModalBody>
  <ModalFooter>
    <Button onClick={handleClose}>Close</Button>
  </ModalFooter>
</Modal>
```

#### Tooltip
Hover tooltip with multiple placement options.

```tsx
import { Tooltip } from '@/components/ui';

<Tooltip content="This is a tooltip" placement="top">
  <Button>Hover me</Button>
</Tooltip>
```

#### Accordion
Collapsible content panels.

```tsx
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@/components/ui';

<Accordion allowMultiple>
  <AccordionItem value="item1">
    <AccordionHeader>Section 1</AccordionHeader>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionHeader>Section 2</AccordionHeader>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Component Usage Examples

Visit `/components` route in your application to see live examples of all components with interactive code samples and API documentation.

### Basic Component Import

```tsx
// Import specific components
import { Button, Card, Typography } from '@/components/ui';

// Import with types
import { Button, type ButtonProps } from '@/components/ui';

// Use in your component
export default function MyComponent() {
  return (
    <Card>
      <Typography variant="h2">Welcome</Typography>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

### Theme Customization

The component library uses Tailwind CSS classes and can be customized through your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## Mock the API with prism

To mock the API based on the OpenAPI specification (openapi.yaml), we can use Prism.

### Install Prism (if not installed globally)

If you don't have Prism installed globally, you can install it using npm:

```bash
    npm install -g @stoplight/prism-cli
```

### Run the mock prism server

1. Make sure you have your OpenAPI specification file (openapi.yaml) ready. By default, it should be located at src/specs/openapi.yaml.
2. Run the Prism mock server with the following command:

```bash
prism mock src/specs/openapi.yaml
```

3. The server will start running at http://127.0.0.1:4010.
   ![Image Description](https://imgur.com/MmTW0sc.png)
4. You can now interact with the mocked API at the specified base URL (http://127.0.0.1:4010).

   **For example:**

   - http://127.0.0.1:4010/api/v1/testimonials (or http://localhost:4010/api/v1/testimonials)

   (here is the response from postman. you can hit this endpoint in Next.js and get response like below)

   ![Image Description](https://i.imgur.com/PsVwNQc.png)

   - http://127.0.0.1:4010/api/v1/banners (or http://localhost:4010/api/v1/banners)

     (when auth required pass Bearer token attach Bearer with random string )
     ![Image Description](https://imgur.com/Ax10sll.png)

   - Mock POST request - http://127.0.0.1:4010/api/v1/faqs

     ![Image Description](https://imgur.com/wUU9rX3.png)

## View API Specification

To view the OpenAPI specification (openapi.yaml) interactively:

1. Copy the content of the openapi.yaml file (located in src/specs/).

2. Visit [Swagger Editor](https://editor.swagger.io/).

3. Paste the content into the editor.

4. The Swagger UI will display all available endpoints defined in the openapi.yaml file, and you can interact with them.

Alternatively, you can also use Swagger UI or Redoc to generate documentation for the OpenAPI specification. Instructions for setting these up are in the project setup section above.
