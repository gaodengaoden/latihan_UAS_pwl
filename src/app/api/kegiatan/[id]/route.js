import prisma from "@/lib/prisma";

export async function PUT(request, { params }) {
    const { id } = await params;
    const { tanggal_kegiatan, lokasi, jenis_kegiatan } = await request.json();

    if (!name || !phone) {
        return new Response(JSON.stringify({ error: 'Field kosong'}), { status: 400 });
    }

    const kegiatan = await prisma.customer.update({
        where: { id: Number(id) },
        data: { tanggal_kegiatan, lokasi, jenis_kegiatan },
    });
    return new Response(JSON.stringify(customer), { status: 200 });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    if (!id) return new Response(JSON.stringify({ error: "ID tidak ditemukan" }), {status: 400 });

    const deletedKegiatan = await prisma.kegiatan.delete({
        where: { id: Number(id) },
    });

    return new Response(JSON.stringify({ message: "Berhasil dihapus" }), { status: 200 });
}