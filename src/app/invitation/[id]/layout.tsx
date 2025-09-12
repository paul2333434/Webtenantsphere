import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TenantSphere Invitation',
  description: 'Accept your TenantSphere invitation',
};

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
