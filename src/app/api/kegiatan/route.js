import prisma from "@/lib/prisma";

export async function GET() {
    const data = await prisma.kegiatan.findMany({
        judulKegiatan: { id: 'asc' },
    });

    return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
    const { tanggal_kegiatan, lokasi, jenis_kegiatan } = await request.json();

    if (!name || !phone) { 
        return new Response(JSON.stringify ({ error: 'Bagian tanggal_kegiatan dan jenis_kegiatan wajib diisi' }), { 
            status: 400,
        });
    }

    const kegiatan = await prisma.customer.create({
        data: { tanggal_kegiatan, lokasi, jenis_kegiatan },
    });

    return new Response(JSON.stringify(kegiatan), { status: 201 });
}