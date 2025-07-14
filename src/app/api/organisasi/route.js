import prisma from "@/lib/prisma";

export async function GET() {
    const data = await prisma.organisasi.findMany({
        namaOrganisasi: { id: 'asc' },
    });

    return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
    const { nama, ketua, kontak } = await request.json();

    if (!nama || !ketua || !kontak) {
        return new Response(JSON.stringify ({ error: 'Semua field wajib diisi' }), {
            status: 400,
        });
    }
    
    const organisasi = await prisma.organisasi.create({
        data: { nama, ketua, kontak },
    });

    return new Response(JSON.stringify(organisasi), { status: 201 });
}